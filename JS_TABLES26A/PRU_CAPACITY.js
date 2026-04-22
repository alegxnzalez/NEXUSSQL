// PRU_CAPACITY.js

window.PRU_CAPACITY = {
  "tables": {
    "PRU_CAPACITY": {
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
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_SPEC"
},
        "PACKAGING_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGING_REFERENCE_UNIT"
},
        "TOTAL_PRU_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "LIMIT_PRU_COUNT": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};