# Run application on Docker

```./start.sh```

# Create your methods to retrieve data from PokéApi
Define your methods on ```IPokemonRepository``` and ```IPokemonGateway```.
Implement those methods on ```PokeapiPokemonMapper``` and ```HttpPokeapiService```.

# Defining a gateway method
Add your line with the definition of the new method. Note that input and output of all methods are of type any.

This is not a random fact. Service definitions wouldn't know anything about what it comes as a parameter and what it comes out.
With this, we gain flexibility in order to realize the same service implementations at different sources. 

# Implementing a gateway method on Service
Create your method, instead of accept an ```any``` as parameter (as we declare at previous step) create the specific DTO to your method and use it as parameter.
Same way with the returning promise. Create another DTO to use it as return type.

The data from both DTO will be the same that returns the api, so be careful. (Copilot works really fine with that)

# Defining a repository method
Add your line with the definition of the new method. Create an specific DTO for input and output.

# Defining a repository method on Mapper
Create your method. This method will use the Service method you've just implemented.
In this method get the input get from parameters and map in something that fits in service's method input.
As the same way, map the output from service's method in something that fits in your output DTO.

# Defining UseCase
Create your use case method on src/pokeapi/domain/useCases with your DTOs.

In this method you will use all the repository methods that you need, ff you do it, it will has it's own DTO.

If you call just at one repository method, you can use the same DTOs as repository method.

# Defining contoller method
Create the controller method. This will be exposed to be used on react application.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
