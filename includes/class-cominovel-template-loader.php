<?php

class Cominovel_Template_Loader {
	protected static $instance;
	protected $defaultTemplateDir;

	public function __construct() {
		$this->defaultTemplateDir = sprintf( '%s/templates', COMINOVEL_ABSPATH );
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function core_template( $templates ) {
		foreach ( (array) $templates as $template ) {
			$template_file = sprintf( '%s/%s.php', $this->defaultTemplateDir, $template );
			if ( file_exists( $template_file ) ) {
				return $template_file;
			}
		}
		return __return_empty_string();
	}

	public function locale_template( $template ) {
		$template = locale_template( $template );
		if ( $template ) {
			return $template;
		}
		return $this->core_template( $template );
	}
}
