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
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dHVseG5wa3ZpZHNtc2NmcXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMzI4NTQsImV4cCI6MjEwNTYwODg1NH0.EGNpTUgR6rA3TsW7gCs3uQ6WsKwGj0Madf2T8AkejH0'
};
