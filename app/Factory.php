<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Factory extends Model
{
    protected $table = "factory";
    protected $guarded = [];

    public function children()
    {
        return $this->hasMany("App\FactoryChildren", "factory_id");
    }
}
