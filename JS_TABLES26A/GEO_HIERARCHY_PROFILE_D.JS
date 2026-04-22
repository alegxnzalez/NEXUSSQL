// GEO_HIERARCHY_PROFILE_D.js

window.GEO_HIERARCHY_PROFILE_D = {
  "tables": {
    "GEO_HIERARCHY_PROFILE_D": {
      "description": "Defines the individual set members that comprise a geo hierarchy profile.",
      "columns": {
        "GEO_HIERARCHY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GEO_HIERARCHY_PROFILE"
},
        "SOURCE_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "Defines the source geography"
},
        "DEST_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "Defines the destination geography"
},
        "RANK": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The lower the rank, the higher the 'preference' for the given geography.  So '1' is the highest rank."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};