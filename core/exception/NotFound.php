<?php
class Exception_NotFound extends Exception_Exception {
  public function __construct($message, $code = 0, Exception $previous = null) {
      parent::__construct($message, 404, $previous);
  }
}
