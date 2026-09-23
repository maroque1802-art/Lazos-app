/* Lazos · configuración de conexión
 *
 * La llave "anon" es PÚBLICA por diseño: va dentro de la aplicación y
 * cualquiera que abra la página puede verla. No es un secreto, y no lo
 * necesita ser: lo que protege los datos son el login y las políticas RLS
 * de Supabase, que deciden en la base qué filas ve cada usuario.
 *
 * La llave "service_role" es harina de otro costal: esa salta todas las
 * políticas. NUNCA va en este archivo ni en ningún archivo del navegador.
 *
 * Dónde sacar la llave anon:
 *   Supabase > Project Settings > API > Project API keys > anon / public
 */
const CONFIG = {
  SUPABASE_URL: 'https://jwtulxnpkvidsmscfqvq.supabase.co',
  SUPABASE_ANON_KEY: 'PEGA_AQUI_LA_LLAVE_ANON'
};
