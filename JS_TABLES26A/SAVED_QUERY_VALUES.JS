// SAVED_QUERY_VALUES.js

window.SAVED_QUERY_VALUES = {
  "tables": {
    "SAVED_QUERY_VALUES": {
      "columns": {
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SAVED_QUERY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "QUERY_VALUE": {
          "type": "VARCHAR2(1024)",
          "nullable": false,
          "key_value": true
},
        "QUERY_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "G",
                    "D"
          ],
          "info": "Determines if the rule is for the generated query or the derived query"
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