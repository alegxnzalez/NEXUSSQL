// SERVPROV_ALIAS.js

window.SERVPROV_ALIAS = {
  "tables": {
    "SERVPROV_ALIAS": {
      "description": "This table stores the alias names for the service providers associated with the qualifiers. For example JBHT is the alias for JBHUNT under the SCAC qualifier.",
      "columns": {
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider."
},
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "The GID for the service provider alias qualifier."
},
        "ALIAS": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Alias provides an alternate way of identifying service providers. For example, you may want to set up an alias that identifies the SCAC of a service provider.  Alternatively, you may want to set up an alias for XY-Z company with a Qualifier ID of SCAC and an alias of ZXY."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};