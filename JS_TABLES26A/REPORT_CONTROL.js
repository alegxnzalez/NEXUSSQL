// REPORT_CONTROL.js

window.REPORT_CONTROL = {
  "tables": {
    "REPORT_CONTROL": {
      "columns": {
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT",
          "info": "GC3 Global indetifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "LANGUAGE_ID": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true
},
        "CONTROL_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CONTROL_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "CONTROL_HELP_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
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