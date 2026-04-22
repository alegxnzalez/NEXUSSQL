// X_OAG_SERVPROV_MAP.js

window.X_OAG_SERVPROV_MAP = {
  "tables": {
    "X_OAG_SERVPROV_MAP": {
      "description": "This is a staging table that stores the information about which service provider uses which airlines.",
      "columns": {
        "AIRLINE": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "key_value": true
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
}
      },
      "fk_tables": []
    }
  }
};