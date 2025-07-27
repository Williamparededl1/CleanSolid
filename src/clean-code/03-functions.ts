(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        cast:        string[];      
        description: string;
        rating:      number;
        title:       string; 
    }
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie): void {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor

    function checkFullName( fullName: string ): boolean {
    console.log('Verificando nombre', fullName);
    return true;
    }
    function createActor( fullName: string, birthdate: Date ): boolean {
        
    
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor',birthdate);
        return true;        

    }

    


})();
