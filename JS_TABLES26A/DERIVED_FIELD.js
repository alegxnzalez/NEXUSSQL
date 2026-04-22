// DERIVED_FIELD.js

window.DERIVED_FIELD = {
  "tables": {
    "DERIVED_FIELD": {
      "description": "Derived Field.  Field on a derived data operations implementation",
      "columns": {
        "DERIVED_DATA_OP_IMPL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_DATA_OP_IMPL",
          "info": "Contains the unique identifier for the derived data operations implementation."
},
        "FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Field name"
},
        "IS_FILTERABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Determines if the field is available for advanced filtering."
},
        "IS_CALCULABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Determines if the field is available for calculations."
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
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE",
          "info": "Unique identifier for the query table."
},
        "PRECISION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Precision value for number/uom fields"
},
        "PARENT_FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Parent field name"
},
        "PROCESSING_SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Processing sequence in which the Calculated data should be retrived or filtered."
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
        "LABEL_KEY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Translatable label for the field"
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
        "DERIVED_FIELD_PARAMETER"
]
    }
  }
};