// CHARTER_VOYAGE_STOWAGE.js

window.CHARTER_VOYAGE_STOWAGE = {
  "tables": {
    "CHARTER_VOYAGE_STOWAGE": {
      "columns": {
        "CHARTER_VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CHARTER_VOYAGE"
},
        "STOWAGE_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STOWAGE_MODE"
},
        "SRC_TERMINAL_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "DEST_TERMINAL_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
},
        "TERMINAL_START_TIME": {
          "type": "NUMBER",
          "nullable": false
},
        "TERMINAL_START_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TERMINAL_START_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TERM_CLS_TM": {
          "type": "NUMBER",
          "nullable": false
},
        "TERM_CLS_TM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TERM_CLS_TM_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MT_AVL_TM": {
          "type": "NUMBER",
          "nullable": true
},
        "MT_AVL_TM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MT_AVL_TM_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "BOOKING_REFERENCE_NO": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "TERM_CLS_TM_NONSTUFF": {
          "type": "NUMBER",
          "nullable": true,
          "info": "when stowage mode is unitization, this the the terminal closing time for the goods that are to be stuffed at the port of loading"
},
        "TERM_CLS_TM_NONSTUFF_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TERM_CLS_TM_NONSTUFF_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MT_AVL_TM_DESTUFF": {
          "type": "NUMBER",
          "nullable": true,
          "info": "when stowage mode is unitization, this the material available time for the goods that are to be stuffed at the port of discharge"
},
        "MT_AVL_TM_DESTUFF_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MT_AVL_TM_DESTUFF_BASE": {
          "type": "NUMBER",
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
      "fk_tables": []
    }
  }
};