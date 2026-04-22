// EXTERNAL_SYSTEM_OUT_JSON.js

window.EXTERNAL_SYSTEM_OUT_JSON = {
  "tables": {
    "EXTERNAL_SYSTEM_OUT_JSON": {
      "description": "This table is used to store the mapping details between external systems and Out JSON Profiles.",
      "columns": {
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
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "The globally-unique identifier for an external system."
},
        "OUT_JSON_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OUT_JSON_PROFILE",
          "info": "The globally-unique identifier for an out JSON profile."
},
        "RESOURCE_ID": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "key_value": true,
          "info": "Root resource identifier, e.g., order releases, shipments, documents, etc."
}
      },
      "fk_tables": []
    }
  }
};