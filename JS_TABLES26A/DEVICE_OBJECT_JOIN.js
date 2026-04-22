// DEVICE_OBJECT_JOIN.js

window.DEVICE_OBJECT_JOIN = {
  "tables": {
    "DEVICE_OBJECT_JOIN": {
      "columns": {
        "DEVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DEVICE"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "START_DATE": {
          "type": "DATE",
          "nullable": false
},
        "END_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE"
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
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
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": []
    }
  }
};