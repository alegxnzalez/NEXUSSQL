// DERIVED_FIELD_PARAMETER.js

window.DERIVED_FIELD_PARAMETER = {
  "tables": {
    "DERIVED_FIELD_PARAMETER": {
      "description": "Parameter definition for a derived field.",
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
          "foreign_key": "DERIVED_FIELD",
          "info": "Contains the unique identifier for the derived data operations implementation"
},
        "FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD",
          "info": "Field name"
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name"
},
        "FIELD_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "Text",
                    "Weight",
                    "Date",
                    "DateTime",
                    "Number",
                    "Currency",
                    "Distance",
                    "Duration",
                    "Length",
                    "Speed",
                    "Temperature",
                    "Volume"
          ],
          "info": "Field type"
},
        "PRECISION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Precision value for number/uom parameters"
},
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "Unique identifier for the query table"
},
        "LABEL_KEY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Translatable field label"
},
        "PARENT_PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Parent parameter name"
},
        "PROCESSING_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Processing sequence in which the parameter is applied"
},
        "XML_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "XML name for the field"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "DERIVED_FIELD_PARAM_DISPLAY",
        "DERIVED_FIELD_PARAM_DISP_OP"
]
    }
  }
};