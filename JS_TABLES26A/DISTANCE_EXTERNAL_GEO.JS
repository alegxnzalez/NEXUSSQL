// DISTANCE_EXTERNAL_GEO.js

window.DISTANCE_EXTERNAL_GEO = {
  "tables": {
    "DISTANCE_EXTERNAL_GEO": {
      "description": "Associates countries with geohierarchies for use with external distance engines",
      "columns": {
        "DISTANCE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DISTANCE_EXTERNAL_ENGINE",
          "info": "External engine GID for this geo."
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Country code for this geo hiearchy, or '*' for default."
},
        "GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GEO_HIERARCHY",
          "info": "Geo hierarchy for this external engine and country."
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};