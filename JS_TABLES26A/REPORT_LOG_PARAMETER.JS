// REPORT_LOG_PARAMETER.js

window.REPORT_LOG_PARAMETER = {
  "tables": {
    "REPORT_LOG_PARAMETER": {
      "description": "This table allows multiple parameters for each table",
      "columns": {
        "FILE_NAME": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT_LOG",
          "info": "File name for the report"
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name is generally the object name, for example, shipement and order_base"
},
        "PARAMETER_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Parameter value is the pk value for the object"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
}
      },
      "fk_tables": []
    }
  }
};