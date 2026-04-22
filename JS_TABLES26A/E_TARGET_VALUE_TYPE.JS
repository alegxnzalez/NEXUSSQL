// E_TARGET_VALUE_TYPE.js

window.E_TARGET_VALUE_TYPE = {
  "tables": {
    "E_TARGET_VALUE_TYPE": {
      "description": "This table stores the types of values that the Targets can contain. Example, the targets can be FIXED values (97% Tender performance always), MOVING_AVERAGE (Target for this month is the Average of last 3 months actuals), or USER_ENTERED (manually entered by the user for each period). This table should usually only contain PUBLIC data.",
      "columns": {
        "TARGET_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TARGET_VALUE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
      "fk_tables": [
        "E_KPI_TARGET_VALUE_TYPE"
]
    }
  }
};