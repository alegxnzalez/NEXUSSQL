// DERIVED_FIELD_PARAM_DISP_OP.js

window.DERIVED_FIELD_PARAM_DISP_OP = {
  "tables": {
    "DERIVED_FIELD_PARAM_DISP_OP": {
      "description": "Valid query operators for a derived field parameter.",
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
        "DERIVED_DATA_OP_IMPL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Contains the unique identifier for the derived data operations implementation."
},
        "FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Field name"
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Parameter name"
},
        "OPERATOR": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true,
          "info": "Query operator"
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