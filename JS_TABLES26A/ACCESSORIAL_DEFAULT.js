// ACCESSORIAL_DEFAULT.js

window.ACCESSORIAL_DEFAULT = {
  "tables": {
    "ACCESSORIAL_DEFAULT": {
      "description": "Table that stores accessorials to be defined globally. The global accessorial will only be applied if an accessorial with the same code exists at the rate_offering/rate_geo level which directs the rating process to use the global accessorial for it's cost.  The global (default) cost will be used if the valid accessorial defined at the rate_offering or rate_geo has no entries for it's costs.",
      "columns": {
        "ACCESSORIAL_COST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_COST"
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
      "fk_tables": []
    }
  }
};