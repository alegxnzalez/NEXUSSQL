// CONTACT_GROUP.js

window.CONTACT_GROUP = {
  "tables": {
    "CONTACT_GROUP": {
      "description": "The contact_group table associates individual person contacts to a group contact (nonperson).  By creating this association, it allows settings of attributes such as interest in particular event notifications to be set at the group level, so that is does not need to be set at the individual level.",
      "columns": {
        "GROUP_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Valid only if contact_type = 'GROUP'.  This is a non-person contact which is used to group individuals together who share interest in notifications, etc."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The contact GID references a person contact which will inherit notifications, etc. from it's contact group.  A contact may belong to more than one contact group."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};