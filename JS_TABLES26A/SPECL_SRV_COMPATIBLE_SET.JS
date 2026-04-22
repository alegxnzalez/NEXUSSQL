// SPECL_SRV_COMPATIBLE_SET.js

window.SPECL_SRV_COMPATIBLE_SET = {
  "tables": {
    "SPECL_SRV_COMPATIBLE_SET": {
      "description": "Define special service compatible set ID.",
      "columns": {
        "SPECL_SRV_COMP_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SPECL_SRV_COMP_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(50)",
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
        "SPECL_SRV_COMP_SET_D",
        "SSCS_SS_JOIN"
]
    }
  }
};