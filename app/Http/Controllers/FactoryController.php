<?php

namespace App\Http\Controllers;

use App\Factory;
use App\FactoryChildren;
use Illuminate\Support\Facades\Input;
use LRedis;


class FactoryController extends Controller
{
    public function get()
    {
        $factories = Factory::all();
        $res = $factories->each(function ($factory) {
            $factory->children;
        });

        return response(json_encode($res));
    }

    public function add()
    {
        $new_factory =  new Factory();
        $new_factory->name = Input::get("name");
        $new_factory->lower_range = Input::get("lower_range");
        $new_factory->upper_range = Input::get("upper_range");
        $new_factory->save();
        $redis = LRedis::connection();
        $new_factory->children;
        $redis->publish('add_factory', json_encode($new_factory));
    }

    public function update()
    {
        $factory = Factory::find(Input::get("factory_id"));
        if (!empty($factory)) {
            $factory->name = Input::get("name");
            $factory->lower_range = Input::get("lower_range");
            $factory->upper_range = Input::get("upper_range");
            $factory->save();
        }
        $redis = LRedis::connection();
        $factory->children;
        $redis->publish('edit_factory', json_encode($factory));
    }

    public function destroy($id)
    {
        $factory = Factory::find($id);
        $factory->delete();
        $redis = LRedis::connection();
        $redis->publish('delete_factory', $id);
    }

    public function add_children()
    {
        $factory = Factory::find(Input::get("factory_id"));
        FactoryChildren::where("factory_id", $factory->id)->delete();
        $children_count = 0;
        while ($children_count < ((int)Input::get("count"))) {
            $child_value = rand($factory->lower_range, $factory->upper_range);
            FactoryChildren::create([
                'name' => $child_value,
                'factory_id' => $factory->id
            ]);

            $children_count++;
        }

        $redis = LRedis::connection();
        $factory->children;
        $redis->publish('add_factory_nodes', json_encode($factory));
    }
}
