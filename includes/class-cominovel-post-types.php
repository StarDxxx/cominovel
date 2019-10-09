<?php

class Cominovel_Post_Types {

	protected $allowed_post_types;

	public function __construct() {
		$this->allowed_post_types = self::get_allowed_post_types();
		$this->init_data();
	}

	public static function get_allowed_post_types() {
		$post_types = get_option( 'cominovel_allowed_post_types' );
		if ( empty( $post_types ) ) {
			$post_types = array( 'comic' );
		}
		return (array) $post_types;
	}

	public static function check_active_data_type( $post_id = 0 ) {
		$allowed_post_types = self::get_allowed_post_types();
		if ( isset( $_GET['data_type'] ) && in_array( $_GET['data_type'], $allowed_post_types ) ) {
			return $_GET['data_type'];
		} elseif ( $post_id > 0 ) {
			$post_type = get_post_type(
				wp_get_post_parent_id( $post_id )
			);
			if ( ! is_wp_error( $post_type ) ) {
				return $post_type;
			}
		}
		return array_shift( $allowed_post_types );
	}

	public function init_data() {
		add_action( 'init', array( $this, 'register_post_status' ), 10 );
		add_action( 'init', array( $this, 'register_main_post_types' ), 5 );
		add_action( 'init', array( $this, 'register_additional_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ), 5 );
	}

	public function register_main_post_types() {
		if ( ! is_blog_installed() || post_type_exists( 'comic' ) ) {
			return;
		}
		do_action( 'cominovel_register_post_types' );
		$supports = array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'publicize', 'wpcom-markdown' );

		if ( in_array( 'comic', $this->allowed_post_types ) ) {
			$labels = array(
				'name'                  => __( 'Comics', 'cominovel' ),
				'singular_name'         => __( 'Comic', 'cominovel' ),
				'all_items'             => __( 'All Comics', 'cominovel' ),
				'menu_name'             => __( 'Comics', 'cominovel' ),
				'add_new'               => __( 'Add new', 'cominovel' ),
				'add_new_item'          => __( 'Add new comic', 'cominovel' ),
				'edit'                  => __( 'Edit', 'cominovel' ),
				'edit_item'             => __( 'Edit comic', 'cominovel' ),
				'new_item'              => __( 'New comic', 'cominovel' ),
				'view_item'             => __( 'View comic', 'cominovel' ),
				'view_items'            => __( 'View comics', 'cominovel' ),
				'search_items'          => __( 'Search comics', 'cominovel' ),
				'not_found'             => __( 'No comics found', 'cominovel' ),
				'not_found_in_trash'    => __( 'No comics found in trash', 'cominovel' ),
				'parent'                => __( 'Parent comic', 'cominovel' ),
				'feature_image'         => __( 'Managa image', 'cominovel' ),
				'set_feature_image'     => __( 'Set comic image', 'cominovel' ),
				'remove_feature_image'  => __( 'Remove comic image', 'cominovel' ),
				'use_featured_image'    => __( 'Use as comic image', 'cominovel' ),
				'insert_into_item'      => __( 'Insert into comic', 'cominovel' ),
				'uploaded_to_this_item' => __( 'Uploaded to this comic', 'cominovel' ),
				'filter_items_list'     => __( 'Filter comics', 'cominovel' ),
				'items_list_navigation' => __( 'Comics navigation', 'cominovel' ),
				'items_list'            => __( 'Comics list', 'cominovel' ),
			);
			$args   = array(
				'labels'              => $labels,
				'description'         => __( 'This is where you can add new comic for your website.', 'cominovel' ),
				'public'              => true,
				'show_ui'             => true,
				// 'capability_type' => 'comic',
				'map_meta_cap'        => true,
				'publicly_queryable'  => true,
				'exclude_from_search' => false,
				'hierarchical'        => true,
				'rewrite'             => array( 'comic' ),
				'query_var'           => true,
				'supports'            => $supports,
				'has_archive'         => true,
				'menu_icon'           => 'dashicons-format-image',
				'show_in_nav_menus'   => true,
				'show_in_rest'        => true,
			);
			register_post_type(
				'comic',
				apply_filters( 'cominovel_register_post_type_comic_args', $args )
			);
		}
		if ( in_array( 'novel', $this->allowed_post_types ) ) {
			$labels = array(
				'name'                  => __( 'Novels', 'cominovel' ),
				'singular_name'         => __( 'Novel', 'cominovel' ),
				'all_items'             => __( 'All Novels', 'cominovel' ),
				'menu_name'             => __( 'Novels', 'cominovel' ),
				'add_new'               => __( 'Add new', 'cominovel' ),
				'add_new_item'          => __( 'Add new comic', 'cominovel' ),
				'edit'                  => __( 'Edit', 'cominovel' ),
				'edit_item'             => __( 'Edit novel', 'cominovel' ),
				'new_item'              => __( 'New novel', 'cominovel' ),
				'view_item'             => __( 'View novel', 'cominovel' ),
				'view_items'            => __( 'View novels', 'cominovel' ),
				'search_items'          => __( 'Search novels', 'cominovel' ),
				'not_found'             => __( 'No novels found', 'cominovel' ),
				'not_found_in_trash'    => __( 'No novels found in trash', 'cominovel' ),
				'parent'                => __( 'Parent novel', 'cominovel' ),
				'feature_image'         => __( 'Managa image', 'cominovel' ),
				'set_feature_image'     => __( 'Set novel image', 'cominovel' ),
				'remove_feature_image'  => __( 'Remove novel image', 'cominovel' ),
				'use_featured_image'    => __( 'Use as novel image', 'cominovel' ),
				'insert_into_item'      => __( 'Insert into novel', 'cominovel' ),
				'uploaded_to_this_item' => __( 'Uploaded to this novel', 'cominovel' ),
				'filter_items_list'     => __( 'Filter novels', 'cominovel' ),
				'items_list_navigation' => __( 'Novels navigation', 'cominovel' ),
				'items_list'            => __( 'Novels list', 'cominovel' ),
			);
			$args   = array(
				'labels'              => $labels,
				'description'         => __( 'This is where you can add new novel for your website.', 'cominovel' ),
				'public'              => true,
				'show_ui'             => true,
				// 'capability_type' => 'comic',
				'map_meta_cap'        => true,
				'publicly_queryable'  => true,
				'exclude_from_search' => false,
				'hierarchical'        => true,
				'rewrite'             => array( 'novel' ),
				'query_var'           => true,
				'supports'            => $supports,
				'has_archive'         => true,
				'menu_icon'           => 'dashicons-media-text',
				'show_in_nav_menus'   => true,
				'show_in_rest'        => true,
			);
			register_post_type(
				'novel',
				apply_filters( 'cominovel_register_post_type_novel_args', $args )
			);
		}

		$labels = array(
			'name'               => _x( 'Chapters', 'post type general name', 'cominovel' ),
			'singular_name'      => _x( 'Chapter', 'post type singular name', 'cominovel' ),
			'menu_name'          => _x( 'Chapters', 'admin menu', 'cominovel' ),
			'name_admin_bar'     => _x( 'Chapter', 'add new on admin bar', 'cominovel' ),
			'add_new'            => _x( 'Add New', 'chapter', 'cominovel' ),
			'add_new_item'       => __( 'Add New Chapter', 'cominovel' ),
			'new_item'           => __( 'New Chapter', 'cominovel' ),
			'edit_item'          => __( 'Edit Chapter', 'cominovel' ),
			'view_item'          => __( 'View Chapter', 'cominovel' ),
			'all_items'          => __( 'All Chapters', 'cominovel' ),
			'search_items'       => __( 'Search Chapters', 'cominovel' ),
			'parent_item_colon'  => __( 'Parent Chapters:', 'cominovel' ),
			'not_found'          => __( 'No chapters found.', 'cominovel' ),
			'not_found_in_trash' => __( 'No chapters found in Trash.', 'cominovel' ),
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'cominovel' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'chapter' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
		);

		register_post_type( 'chapter', apply_filters( 'cominovel_register_post_type_chapter_args', $args ) );
	}

	public function register_additional_post_types() {
		$labels = array(
			'name'          => __( 'Artist', 'cominovel' ),
			'singular_name' => __( 'Artist', 'cominovel' ),
		);
		$args   = array(
			'labels'       => $labels,
			'public'       => true,
			'hierarchical' => false,
			'show_in_menu' => false,
			'show_in_rest' => true,
		);
		register_post_type(
			'artist',
			apply_filters(
				'cominovel_register_post_type_artist_args',
				$args
			),
		);

		$labels = array(
			'name'          => __( 'Authors', 'cominovel' ),
			'singular_name' => __( 'Author', 'cominovel' ),
		);
		$args   = array(
			'labels'       => $labels,
			'public'       => true,
			'hierarchical' => false,
			'show_in_menu' => false,
			'show_in_rest' => true,
		);
		register_post_type(
			'author',
			apply_filters(
				'cominovel_register_post_type_author_args',
				$args,
			),
		);
	}

	public function register_taxonomies() {
		$genre_rewrite = array(
			'slug'         => 'genre',
			'with_front'   => false,
			'hierarchical' => true,
		);

		$labels = array(
			'name'              => __( 'Genres', 'cominovel' ),
			'singular_name'     => __( 'Genre', 'cominovel' ),
			'menu_name'         => __( 'Genres', 'cominovel' ),
			'search_items'      => __( 'Search genres', 'cominovel' ),
			'all_items'         => __( 'All genres', 'cominovel' ),
			'parent_item'       => __( 'Parent genre', 'cominovel' ),
			'parent_item_colon' => __( 'Parent genre:', 'cominovel' ),
			'edit_item'         => __( 'Edit genre', 'cominovel' ),
			'update_item'       => __( 'update genre', 'cominovel' ),
			'add_new_item'      => __( 'Add new genre', 'cominovel' ),
			'add_new_name'      => __( 'New genre name', 'cominovel' ),
			'not_found'         => __( 'No genres found', 'cominovel' ),
		);
		$args   = array(
			'hierarchical'          => false,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
		);
		register_taxonomy(
			'genre',
			$this->allowed_post_types,
			apply_filters(
				'cominovel_taxonomy_args_cominovel_genre',
				$args,
			)
		);

		$labels = array(
			'name'          => __( 'Releases', 'cominovel' ),
			'singular_name' => __( 'Release', 'cominovel' ),
		);
		$args   = array(
			'labels'       => $labels,
			'public'       => true,
			'hierarchical' => false,
			'show_in_rest' => true,
			'show_in_menu' => false,
		);
		register_taxonomy(
			'cmn_release',
			$this->allowed_post_types,
			apply_filters(
				'cominovel_taxonomy_args_cominovel_release_args',
				$args
			)
		);

		$labels = array(
			'name'          => __( 'Authors', 'cominovel' ),
			'singular_name' => __( 'Author', 'cominovel' ),
		);
		$args   = array(
			'labels'            => $labels,
			'public'            => false,
			'hierarchical'      => false,
			'show_admin_column' => true,
			'show_in_menu'      => false,
		);
		register_taxonomy(
			'author',
			$this->allowed_post_types,
			apply_filters(
				'cominovel_taxonomy_args_cominovel_author_args',
				$args
			)
		);

		$labels = array(
			'name'          => __( 'Artists', 'cominovel' ),
			'singular_name' => __( 'Artist', 'cominovel' ),
		);
		$args   = array(
			'labels'            => $labels,
			'public'            => false,
			'hierarchical'      => false,
			'show_admin_column' => true,
			'show_in_menu'      => false,
		);
		register_taxonomy(
			'artist',
			$this->allowed_post_types,
			apply_filters(
				'cominovel_taxonomy_args_cominovel_artist_args',
				$args
			)
		);

		register_taxonomy(
			'cmn_tag',
			$this->allowed_post_types,
			apply_filters(
				'cominovel_taxonomy_args_cominovel_tag',
				array(
					'labels'            => array(
						'name'          => __( 'Tags', 'cominovel' ),
						'singular_name' => __( 'Tag', 'cominovel' ),
					),
					'public'            => true,
					'hierarchical'      => false,
					'show_ui'           => true,
					'show_admin_column' => true,
					'show_in_rest'      => true,
				)
			)
		);

		$post_types = self::get_allowed_post_types();
		foreach ( $post_types as $post_type ) {
			$post_type_object = get_post_type_object( $post_type );
			$args             = array(
				'labels'            => $post_type_object->labels,
				'public'            => false,
				'hierarchical'      => false,
				'show_admin_column' => true,
				'show_in_menu'      => false,
			);
			register_taxonomy(
				"tax_{$post_type}",
				'chapter',
				apply_filters(
					"cominovel_taxonomy_args_cominovel_{$post_type}_args",
					$args
				)
			);
		}
	}

	public function register_post_status() {
	}

	public function rest_api_allowed_post_types( $post_types ) {
		$post_types[] = 'comic';
		return $post_types;
	}

	public function gutenberg_can_edit_post_type( $can_edit, $post_type ) {
		return 'comic' === $post_type ? false : $can_edit;
	}
}

new Cominovel_Post_Types();
