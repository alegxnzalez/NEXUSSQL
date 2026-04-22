// OUT_JSON_PROFILE_FIELDS.js

window.OUT_JSON_PROFILE_FIELDS = {
  "tables": {
    "OUT_JSON_PROFILE_FIELDS": {
      "description": "This table is used to save out json profile fields selected by user.",
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
        "OUT_JSON_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OUT_JSON_PROFILE",
          "info": "The globally-unique identifier for an out JSON profile."
},
        "FIELD_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true,
          "info": "The field name selected by the user during out JSON profile creation."
}
      },
      "fk_tables": []
    }
  }
};