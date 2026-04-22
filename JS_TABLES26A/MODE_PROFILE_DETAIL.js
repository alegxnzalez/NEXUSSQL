// MODE_PROFILE_DETAIL.js

window.MODE_PROFILE_DETAIL = {
  "tables": {
    "MODE_PROFILE_DETAIL": {
      "description": "This table links the mode profiles to the transportation modes.",
      "columns": {
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MODE_PROFILE",
          "info": "A unique identifier to define the mode profile group."
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSPORT_MODE",
          "info": "A unique identifier to define the transport mode within the system. This field defines what transport modes (eg. Air, truck, Barge etc.) are available with the mode profile group."
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