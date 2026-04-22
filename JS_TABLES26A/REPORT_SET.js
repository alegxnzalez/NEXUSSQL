// REPORT_SET.js

window.REPORT_SET = {
  "tables": {
    "REPORT_SET": {
      "description": "Table to define the Report Sets to enable scheduling multiple reports as a group.",
      "columns": {
        "REPORT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier to define the report set."
},
        "REPORT_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier to define the report set."
},
        "REPORT_SET_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "A name for the report set that will help users identify the purpose of the report set."
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
      "fk_tables": [
        "REPORT_LOG",
        "REPORT_SET_DETAIL"
]
    }
  }
};