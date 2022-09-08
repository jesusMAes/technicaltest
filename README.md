# technicaltest Digizone

# Vista general
Añado un gif con la aplicación en funcionamiento, las horas están al final.

![overview](https://user-images.githubusercontent.com/95760152/189157186-77c5a3bd-4cf3-48c6-998a-81430bc4e036.gif)

## Archivos relevantes
La aplicación está generada con el comando de Npx y tiene muchos archivos generados automáticamente, los creados o modificados por mi son:
- App
- Los archivos de la carpeta screen que contienen cada pantalla
- Los archivos de la carpeta components que contienen los componentes de cada reel y cada animal generado
- En la carpeta redux está el store y el reducer

###### Cuando programo algo siempre añado un archivo extra llamado notas.txt para uso personal en el que explico como funciona cada cosa, en que punto me he quedado trabajando de un día para otro, el funcionamiento de códigos o librerías que me costó entender y demás, de esta manera puedo releerlo a diario y obtener una vista general, normalmente lo borraría pero he decidido dejarlo porque así puede verse un poco mi forma de trabajar

### Home
<img src="https://user-images.githubusercontent.com/95760152/189158824-d0f11a36-c72a-4d4f-831c-2a2d1e823c6e.png" width="200">

Usa los botones para indicar la screen a la que navegar

### Our Zoo
<img src="https://user-images.githubusercontent.com/95760152/189161860-c1e1801e-d40e-488d-8d0c-eaec92be13b3.png" width="200">

Esta pantalla realiza una petición a la api usando Axios y useeffect para renovarla cada vez que se entra, la petición está dentro de una función asíncrona y usa awaits para recoger los datos, los almacena en una variable y hace un dispatch para que el reducer almacene el último de los animales en el estado global.
El método render usa la variable en la que se almacenaron los datos para hacer map y pasarsela por props a un componente llamado singleaanimal que se encarga de renderizar cada animal y pintarlo en pantalla

### Last Animal
<img src="https://user-images.githubusercontent.com/95760152/189162993-ee1e921e-b0af-4de7-811c-2fba688f4f72.png" width="200">

Utiliza useSelector para recuperar la variable currentAnimal del estado global, luego usa esta variable para renderizar un diseño ampliado del su ficha de datos, puesto que en la screen de API se llama al dispatch en useeffect esto también se actualiza cada vez que se vuelve a entrar.
En caso de no haber un animal realiza un renderizado condicional para mostrar un mensaje de error y un botón que redirije a la pantalla de API, puede verse en funcionamiento en este gif

<img src="https://user-images.githubusercontent.com/95760152/189163955-85b082b3-6c1a-4df9-b380-47dbb5389da8.gif" width="200">

###### También puede verse que las imagenes tardan en cargar, se debe a que la API da imágenes en gran resolución y al cargarse desde internet a veces va lento

### Great Design
<img src="https://user-images.githubusercontent.com/95760152/189164509-60812a1e-8263-4564-b679-55b8c0561939.png" width="200">

Respecto a la parte lógica hay poco que destacar de esta pantalla pues casi todo es CSS, los reels están separados en componentes para hacerlo más legible.
Todos funcionan con un flatlist que recibe un array de objetos para crear el reel, imágenes y videos están alojados localmente por hacer más rápido el renderizado pero para que funcione desde internet solo hay que cambiar la ruta. 
El proceso de pausar y parar videos usa una variable que alberga un valor booleano por cada item, puesto que flatlist da un index a cada elemento se usa el index y el array para fijar la propiedad paused del video, al presionar el botón se llama a una función que recibe el index y recorre el array poniendo en false todos los elementos menos el que posee ese index, así se paran el resto de videos y se reproduce el pulsado. Se usa esa misma propiedad para aplicar un estilo condicional al botón y hacer que desaparezca al pulsarse

# Horas invertidas:

- Instalar react native, android studio, hacer el setup general, coordinarlos y leer la documentación de react native: __6 horas__
- Home incluyendo navigator y diseño: **2 horas**
- API Screen, la llamada a la API resulto fácil pero redux se me atascó y me costó, junto con el diseño: **6 horas**
- Redux Screen, una vez tenía Redux funcionando fue sencillo, perdí tiempo intentando entender porqué no cargaban algunas imágenes de la api pero resultó que el código estaba bien, era tan solo la conexión wifi: **2 horas**
- Great Design Screen, a nivel de desarrollarla no implica dificultad pero trabajar en recrear los estilos, que cuadrasen probar margenes, padding, fuentes, tamaños, maquetarlo todo... Lleva mucho más tiempo, el añadido de reproducir los videos usando react native video y solucionar su incompatibilidad con el emulador de android me tomó un tiempo así como pensar en una manera decente de reproducirlos: **10 horas**
- Refactorizar, inicialmente todo el código de cada pantalla estaba volcado en la misma, refactorizar para hacerlo más legible: **2 horas**

- ### Total: **30 horas**

###### añadido el aprender react native y leer la documentación que entre una cosa y otra consume tiempo
