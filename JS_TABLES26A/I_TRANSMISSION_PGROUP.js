// I_TRANSMISSION_PGROUP.js

window.I_TRANSMISSION_PGROUP = {
  "tables": {
    "I_TRANSMISSION_PGROUP": {
      "columns": {
        "PGROUP_ID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "I_TRANSMISSION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "OWNER_PGROUP": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IN_SEQUENCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "STOP_PROCESS_ON_ERROR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if processing of the group should be stopped when an error occurs in a Transaction."
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