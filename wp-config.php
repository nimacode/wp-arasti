<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'arasti' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'P@ssw0rd' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'dV,Q)A|RMxW+(#i/ZmWB-wvDhs4H<Wy%{!Na [lTZkP/Rw&^bX? .r>Rx2@1l`yF' );
define( 'SECURE_AUTH_KEY',  '/XsntJ+to(CE#ZrS5;L@.H4S.M9&ClFD|n7d9zi?NKV(mEss?Zm_uJuHIuof2xPU' );
define( 'LOGGED_IN_KEY',    'eA1o<2]6Y9H*mwFEgW%)9EIseQf7fN-{L@Xv >wU@$2<^/2-w?Um)tz=O`qodb5F' );
define( 'NONCE_KEY',        '77%0NJg)a#9J*p@`Y.bq!}3zhXVl>NHeoK#9od8}5wB?[bKf1g.;mPnEd*^DnjDI' );
define( 'AUTH_SALT',        'Z]}}+C$9~K:F>F?tuwP<bTGBr!0d5;SR*,8WIn6*MB-kxeH-%qI%wUgjjNIpb@X+' );
define( 'SECURE_AUTH_SALT', '&do^-;unjtC@^UXsPK85kf),l/-3qCD*`r87q^[W9ygMWXTR#g;e>P3-Q]3^[h1k' );
define( 'LOGGED_IN_SALT',   'i hkz*jC3Cu/Jbo)PS+TD<q<MfRR:.*uFFHRH$spY=q..-F9Ld>,{Y:LK/dId:kp' );
define( 'NONCE_SALT',       '-F@nMPe:y6P^3O};#pQ@+po$l#.b&7PD-<iy~vxN*@-1t+J_p/35KNVcO<r{o&:(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
