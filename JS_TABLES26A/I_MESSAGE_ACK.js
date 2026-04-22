// I_MESSAGE_ACK.js

window.I_MESSAGE_ACK = {
  "tables": {
    "I_MESSAGE_ACK": {
      "columns": {
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "ACK_DATE": {
          "type": "DATE",
          "nullable": true
},
        "ACK_STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "ACK_REASON": {
          "type": "VARCHAR2(1000)",
          "nullable": true
},
        "PARTITION_KEY": {
          "type": "NUMBER",
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
      "fk_tables": []
    }
  }
};