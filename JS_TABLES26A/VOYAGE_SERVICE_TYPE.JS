// VOYAGE_SERVICE_TYPE.js

window.VOYAGE_SERVICE_TYPE = {
  "tables": {
    "VOYAGE_SERVICE_TYPE": {
      "columns": {
        "VOYAGE_SERVICE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "VOYAGE_SERVICE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
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
        "SERVICE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Specifies the name of the service as labeled by the carrier."
},
        "SERVICE_CODE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Specifies the code of the service as labeled by the carrier."
}
      },
      "fk_tables": [
        "CUTOFF_RECOVERY_TIME_D",
        "VOYAGE",
        "VOYAGE_SERVICE_MAP",
        "VOYLOC"
]
    }
  }
};