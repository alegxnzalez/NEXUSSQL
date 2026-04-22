// TIME_WINDOW_EMPHASIS.js

window.TIME_WINDOW_EMPHASIS = {
  "tables": {
    "TIME_WINDOW_EMPHASIS": {
      "description": "This table is used to indicate which components of the  time window should be emphasized. Specify 'BOTH' if both early and late delivery dates must be honored.   Specify 'SHIP' if only ship window need by honored.   Specify 'DELV' if only delivery window need by honored.   Specify 'NONE' if GLog should determine the ship and delivery window.",
      "columns": {
        "TIME_WINDOW_EMPHASIS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "TIME_WINDOW_EMPHASIS_XID": {
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
}
      },
      "fk_tables": [
        "OB_ORDER_BASE",
        "ORDER_RELEASE"
]
    }
  }
};