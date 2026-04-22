// SSCS_SS_JOIN.js

window.SSCS_SS_JOIN = {
  "tables": {
    "SSCS_SS_JOIN": {
      "description": "Defines this special service compatible sets for a special service.",
      "columns": {
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE"
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "DRIVER",
                    "EQUIPMENT",
                    "POWER_UNIT"
          ],
          "info": "User can define different compatible set for different object type."
},
        "SPECL_SRV_COMP_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SPECL_SRV_COMPATIBLE_SET",
          "info": "Special service compatible set which is totally compatible with this special service."
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