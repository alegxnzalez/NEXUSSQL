// NOTIFY_FUNCTION.js

window.NOTIFY_FUNCTION = {
  "tables": {
    "NOTIFY_FUNCTION": {
      "description": "Contains the valid list of entries of notification content types.   In other words, it a unique identifier for each group of contents that might be in the email (or fax, etc.). For example, a function might be 'SHIPMENT_STATUS'.  A shipment status' email contents would include the shipment_gid, shipment status, date of shipment, etc.  These contents that relate to the function is stored in the LOCATION_COM_MAPPING table.  A function is then associated with a specific event (like 'SHIPMENT STATUS - DELAYED' or 'SHIPMENT STATUS - COMPLETED') within the NOTIFY_SUBJECT table.  People can then subscribe to an event that they are interested in, and then receive an email notification (or another communication method) when that event occurs.",
      "columns": {
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "NOTIFY_FUNCTION_XID": {
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
        "AUDIT_TRAIL",
        "MAIL_PGROUP_PROF_FUNCT",
        "NOTIFY_SUBJECT",
        "PROBLEM",
        "STYLESHEET_PROFILE"
]
    }
  }
};