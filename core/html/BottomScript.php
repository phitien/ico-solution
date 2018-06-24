<?php
class Html_BottomScript extends Html_Dom {
  public static $data = [];
  public function __toString() {
    $html = "";
    if (is_string($this->_d)) $html = sprintf("<script>%s</script>", $this->_d);
    else {
      $props = [];$text = "";
      $this->prop($props, 'defer','true');
      foreach($this->_d as $k => $v) {
        if ($k == 'content') $text = $v;
        else $this->prop($props,$k,$v);
      }
      $html = sprintf('<script %s>%s</script>',implode(" ", $props),$text);
    }
    return $html;
  }
}
