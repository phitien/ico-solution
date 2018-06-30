<?php
class Model_Menu extends Model {
	protected $table = 'menu';
	protected $pk = 'id';
	protected $_fields = [
		'id','parent_id','name','url','image','description','extra',
	];
}
