// ACCESSORIAL_BASIS_PRECEDENCE.js

window.ACCESSORIAL_BASIS_PRECEDENCE = {
  "tables": {
    "ACCESSORIAL_BASIS_PRECEDENCE": {
      "columns": {
        "RATE_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OPERAND"
},
        "PRECEDENCE": {
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