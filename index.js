const ids = {};

function id( prefix = "ID" ) {
    if ( !ids[ prefix ] ) {
        ids[ prefix ] = 1;
    } else {
        ids[ prefix ] += 1;
    }
    return `${ prefix }__${ ids[ prefix ] }`;
}

module.exports = id;

