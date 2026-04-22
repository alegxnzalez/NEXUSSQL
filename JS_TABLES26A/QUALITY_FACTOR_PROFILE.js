// QUALITY_FACTOR_PROFILE.js

window.QUALITY_FACTOR_PROFILE = {
  "tables": {
    "QUALITY_FACTOR_PROFILE": {
      "description": "This table is used to specify the quality of the service. This can be associated with the leg table to specify for example, that the leg has an excellent and/or good service available by one or more carriers.",
      "columns": {
        "QUALITY_FACTOR_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "QUALITY_FACTOR_PROFILE_GID contains the unique identifier for the quality factor profile for a service provider."
},
        "QUALITY_FACTOR_PROFILE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "QUALITY_FACTOR_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
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
      "fk_tables": [
        "LEG"
]
    }
  }
};