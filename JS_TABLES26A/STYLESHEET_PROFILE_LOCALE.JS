// STYLESHEET_PROFILE_LOCALE.js

window.STYLESHEET_PROFILE_LOCALE = {
  "tables": {
    "STYLESHEET_PROFILE_LOCALE": {
      "description": "This is a join table for stylesheet_profile and stylesheet_content to store locale specfic details for notify stylesheet templates.",
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
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "This field represents unique stylesheet profile ID."
},
        "LANGUAGE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "This field represents language used in stylesheet content."
},
        "COUNTRY": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "This field represents country."
},
        "STYLESHEET_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STYLESHEET_CONTENT",
          "info": "This field represents stylesheet content ID."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};