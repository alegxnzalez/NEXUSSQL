// CAPACITY_OVERRIDE.js

window.CAPACITY_OVERRIDE = {
  "tables": {
    "CAPACITY_OVERRIDE": {
      "columns": {
        "CAPACITY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CAPACITY_OVERRIDE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CAPACITY_OVERRIDE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "DISCONTINUE_DATE": {
          "type": "DATE",
          "nullable": true
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
        "CAPACITY_OVERRIDE_LINE",
        "LEG_CAPACITY_OVERRIDE"
]
    }
  }
};