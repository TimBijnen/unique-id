const id = require("./index");

describe("ID generator | ", () => {
    it( "can generate unique ids without identifiers", ( ) => {
        expect( id() ).toEqual( "ID__1" );
        expect( id() ).toEqual( "ID__2" );
    } );

    it( "can generate unique ids with identifiers", ( ) => {
        expect( id( "IDENTIFIER" ) ).toEqual( "IDENTIFIER__1" );
        expect( id( "IDENTIFIER" ) ).toEqual( "IDENTIFIER__2" );
    } );

    it( "will keep generated ids in memory", ( ) => {
        expect( id() ).toEqual( "ID__3" );
        expect( id() ).toEqual( "ID__4" );
    } );
} );

