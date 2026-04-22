// GTM_LICENSE_LINE.js

window.GTM_LICENSE_LINE = {
  "tables": {
    "GTM_LICENSE_LINE": {
      "columns": {
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
},
        "LICENSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_LICENSE",
          "info": "The GID for the GTM license."
},
        "LICENSE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM license line."
},
        "LICENSE_LINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the GTM license line."
},
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "The GID for commodity associated with the GTM license line."
},
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "The GID for user-defined commodity associated with the GTM license line."
},
        "BALANCE_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Total Available Quantity which is calculated as Authorized Quantity - Used Quantity - Reserved Quantity."
},
        "LINE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Indicates if the license line is an export or an import."
},
        "PRODUCT_CLASSIFICATION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Specifies the product classification code or formula used to match a license line to a transaction line or declaration line."
},
        "LICENSE_ITEM_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Description of the license line."
},
        "QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The quantity that is authorized by the licensing authority."
},
        "BALANCE_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit of measure of the available quantity on the license line."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the GTM license line value qualifier."
},
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID for the GTM license line quantity qualifier."
},
        "QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit of measure of the authorized quantity on the license line."
},
        "CURRENCY_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The value that is authorized by the licensing authority."
},
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The authorized currency value in base units."
},
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the authorized value currency on the license line."
},
        "BAL_CURRENCY_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The Total Available Value which is calculated as Authorized Value - Used Value - Reserved Value."
},
        "BAL_CURRENCY_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The available currency value in base units."
},
        "BAL_CURR_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the available value currency on the license line."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Marks the condition or state of the GTM license line using colors."
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM license line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM license line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM license line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM license line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM license line using images. It is a foreign key reference to ICON table."
},
        "USED_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The quantity that is used with respect to the authorized quantity on the license line."
},
        "USED_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure of the used quantity on the license line."
},
        "RESERVED_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The quantity that is reserved on the license line."
},
        "RESERVED_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure of the reserved quantity on the license line."
},
        "USED_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The value that is used with respect to the authorized value on the license line."
},
        "USED_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The used currency value in base units."
},
        "USED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the used value currency on the license line."
},
        "RESERVED_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The value that is reserved on the license line."
},
        "RESERVED_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The reserved currency value in base units."
},
        "RESERVED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the reserved value currency on the license line."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
},
        "GTM_PRODUCT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PRODUCT_GROUP",
          "info": "Specifies the product classification group used to match a license line to a transaction line or declaration line"
}
      },
      "fk_tables": [
        "GTM_LICENSE_LINE_ITEM",
        "GTM_LICENSE_LINE_REFNUM",
        "GTM_LICENSE_LINE_REMARK",
        "GTM_LICENSE_LINE_VALUE",
        "GTM_LIC_LINE_SAVED_QUERY",
        "GTM_TRANS_LINE_LICENSE"
]
    }
  }
};