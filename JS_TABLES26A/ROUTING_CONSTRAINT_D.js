// ROUTING_CONSTRAINT_D.js

window.ROUTING_CONSTRAINT_D = {
  "tables": {
    "ROUTING_CONSTRAINT_D": {
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
        "ROUTING_CONSTRAINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTING_CONSTRAINT"
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION"
},
        "INCLUDE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If N, must not include the specified LOCATION_GID in the path; If Y, when specified with an unique SEQUENCE_NUM in all the records with the same ROUTING_CONSTRAINT_GID, then the specified LOCATION_GID must be included in the path; otherwise, at least one of the LOCATON_GID defined for the ROUTING_CONSTRAINT_GID with the same SEQUENCE_NUM must be used."
},
        "SEQUENCE_NUM": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};