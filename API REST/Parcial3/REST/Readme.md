# Principios REST
Principios y/o restricciones de la arquitectura REST  

## ¿Qué es API REST?
(Representational state transfer) El principio REST se basa en el concepto de que el cliente y el servidor deben estar aislados entre sí y permitir que se desarrollen de forma independiente. De esta manera, puede mejorar la capacidad de administración en numerosas plataformas y aumentar la escalabilidad mediante la optimización de los componentes del servidor, ya que las preocupaciones sobre la interfaz de usuario están separadas de las preocupaciones sobre el almacenamiento de datos.
El surgimiento de REST fue el año 2000, descrito en la tesis de Roy Fielding, padre de la especificación HTTP.

## Principios de diseño REST
Según Roy Fielding la construcción y diseño de REST se basa en los siguientes principios descritos a continuación:
- Cliente-servidor: El cliente y el servidor deben estar completamente separados e independientes. La única forma de comunicación debe ser mediante solicitudes HTTP. 
- Sin estado (stateless): La comunicación entre el cliente y el servidor debe ser sin estado, lo cual implica que no se almacenará ni se compartirá información entre peticiones. Toda petición es independiente y debe contener sólo la información necesaria para procesarla.
- Cache: Como una API sin estado puede aumentar solicitar gastos generales al administrar grandes cargas de llamadas entrantes y salientes, un diseño de API REST debe almacenar datos almacenables en caché. Si una respuesta se puede almacenar en caché, la caché del cliente tiene el derecho de reciclar esos datos de respuesta para solicitudes similares en el futuro. 
- Interfaz uniforme: Para desacoplar un cliente del servidor, debe tener una interfaz unificada que permita el desarrollo autónomo de la aplicación sin vincular estrechamente sus servicios, modelos y acciones a la capa API en sí. Este principio de diseño agiliza toda la arquitectura del sistema y mejora la visibilidad. de las comunicaciones. Varios controles arquitectónicos requieren guiar el rendimiento de los elementos dentro de la arquitectura REST API para lograr una interfaz uniforme.
- Sistema de capas: La arquitectura de la API REST incluye varias capas que operan juntas para construir una jerarquía que ayuda a generar una aplicación más escalable y flexible. Debido a su sistema de capas, una aplicación tiene mejor seguridad ya que los componentes de cada capa no pueden interactuar fuera de la capa siguiente. Además, equilibra las cargas y ofrece cachés compartidos para estimular escalabilidad.
- Código bajo demanda (opcional): Los servidores pueden ser capaces de aumentar o definir cierta funcionalidad en el cliente transfiriéndole cierta lógica que pueda ejecutar: Componentes compilados como applets de Java JavaScript en cliente.

## Reglas de diseño REST
A continuación se describirán las reglas principales de construcción de APIs siguiendo los principios y comportamiento definidos en los libros REST API Design Rulebook y RESTful web API Handbook.

Las reglas principales del diseño son:
- Uso correcto de verbos y código de estado HTTP.
- Uso de sustantivos en puntos finales y nombres en plural.
- Uso correcto de filtrado, clasificación y paginación.

## Seguridad en API REST
Recordando que REST está construido sobre el protocolo HTTP y la seguridad sobre este mismo es compartida. A continuación se nombrarán directrices que se aplican a todas las APIS basadas en HTTP para el uso seguro.
- Utilización de cupos y límites: Se deben establecer cupos de frecuencia con la que se puede recurrir a toda API en conjunto de seguimiento e historial de uso.
- Utilización de puertas de enlaces: Se pueden utilizar puertas de enlaces para establecer puntos principales de control de tráfico de nuestras APIs. Las puertas de enlaces permitirán autenticar el tráfico, controlar y analizar el uso de las APIs.
- Uso de HTTPS: Creación de conexiones segura y cifrada entre un cliente y servidor.
- Implementación de autenticación y autorización: Se debe implementar capas de seguridad extra para la identificación de clientes en la solicitud de todos recursos.

## Uso correcto de verbos y codigo de estado HTTP
Las pautas de REST sugieren usar un verbo HTTP específico dependiendo de la particularidad de la llamada. REST debe respetar tanto los verbos y códigos de estado para cada operación.

A continuación los verbos empleados correctamente dependiendo de la acción a realizar en el servidor.

- GET: Solicita información de recursos.
- POST: Creación de nuevos recursos.
- PUT: Actualiza un recurso existente en su totalidad.
- PATCH: Actualiza un recurso existente parcialmente.
- DELETE: Elimina un recurso existente.

A continuación los códigos de estado utilizados correctamente dependiendo de la situación.

- 1XX: Respuestas informativas.
- 2XX: Peticiones correctas.
- 3XX: Redirecciones.
- 4XX: Errores del cliente.
- 5XX: Errores del servidor.