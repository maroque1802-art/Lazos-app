/* Lazos · configuración de conexión
 *
 * La llave "anon" es PÚBLICA por diseño: viaja dentro de la aplicación y
 * cualquiera que abra la página puede verla. No es un secreto y no necesita
 * serlo: sin sesión iniciada, las políticas RLS de Supabase no devuelven
 * ninguna fila.
 *
 * La llave "service_role" NUNCA va aquí: esa salta todas las políticas.
 *
 * Se llama CONFIG_SB y no CONFIG para no chocar con la configuración del
 * negocio (tasa, mínimo cobrado, umbral), que vive dentro de la app.
 */
const CONFIG_SB = {
  SUPABASE_URL: 'https://jwtulxnpkvidsmscfqvq.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dHVseG5wa3ZpZHNtc2NmcXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwMzI4NTQsImV4cCI6MjEwNTYwODg1NH0.EGNpTUgR6rA3TsW7gCs3uQ6WsKwGj0Madf2T8AkejH0'
};
