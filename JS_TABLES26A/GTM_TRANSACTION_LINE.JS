// GTM_TRANSACTION_LINE.js

window.GTM_TRANSACTION_LINE = {
  "tables": {
    "GTM_TRANSACTION_LINE": {
      "columns": {
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM trade transaction line."
},
        "GTM_TRANSACTION_LINE_XID": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "info": "The XID for the GTM trade transaction line."
},
        "GTM_TRANSACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION",
          "info": "The GID for the GTM trade transaction."
},
        "LINE_OBJECT_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "N/A"
},
        "LINE_OBJECT_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "N/A"
},
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item associated with the GTM trade transaction line."
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
},
        "PARENT_TRANS_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "Indicates the parent transaction line for a transaction line which is a child line."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Marks the condition or state of the GTM trade transaction line using colors."
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction line using images. It is a foreign key reference to ICON table."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Marks the condition or state of the GTM trade transaction line using images. It is a foreign key reference to ICON table."
},
        "PRECEDING_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "If a transaction line is created from another transaction line, this indicates the preceding transaction line from which this line is created."
},
        "COUNTRY_OF_ORIGIN": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country of origin for item associated with the GTM trade transaction line."
},
        "COUNTRY_OF_MANUFACTURE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The country of manufacture for item associated with the GTM trade transaction line."
},
        "TRANS_LINE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "TRANSACTION_LINE",
                    "SHIPMENT_LINE"
          ],
          "info": "Indicates if a line is a transaction line or a declaration line."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "GTM_TR_ITEM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TR_ITEM_STRUCTURE",
          "info": "Component of transaction item structure indicates the parent item structure that the line is part of."
},
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the trade item structure."
},
        "GTM_STRUCTURE_COMPONENT_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The sequence number of the component within an item structure."
},
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The GID for the incoterm associated with the GTM trade transaction line."
},
        "INCO_TERM_LOCATION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The incoterm location associated with the GTM trade transaction line."
},
        "GTM_VALUATION_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUATION_METHOD",
          "info": "The GID for the valuation method associated with the GTM trade transaction line."
},
        "GTM_BOND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_BOND",
          "info": "The GID for the bond associated with the GTM trade transaction line."
},
        "LINE_ITEM_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Describes the item on the transaction line."
},
        "GTM_TRADE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRADE_PREFERENCE",
          "info": "The GID for the trade preference associated with the GTM trade transaction line."
},
        "GTM_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "The GID for the procedure associated with the GTM trade transaction line."
},
        "GTM_PRIOR_PROCEDURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE",
          "info": "The GID for the prior procedure associated with the GTM trade transaction line."
},
        "GTM_PROCEDURE_DETAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROCEDURE_DETAIL",
          "info": "The GID for the procedure detail associated with the GTM trade transaction line."
},
        "GTM_TARIFF_CODE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "This column represents the trade program applicable for transaction line."
},
        "IMPORT_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
},
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Date"
},
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type as Number"
},
        "COUNTRY_OF_IMPORT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "This describes the country of import for the transaction line."
},
        "COUNTRY_OF_EXPORT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "This describes the country of export for the transaction line."
},
        "ITEM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_STRUCTURE",
          "info": "Item Structure field indicates the structure that was used for qualification or business process."
},
        "IS_CANCELED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the transaction line is a canceled line."
},
        "TIP_GENERATED_STRUCTURE_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "Item Structure Tree with Generated Sequence Number for each component"
},
        "GTM_TIP_ZONE_STATUS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_ZONE_STATUS",
          "info": "Trade Incentive Program Zone Status GID"
},
        "PRIOR_ZONE_STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TIP_ZONE_STATUS",
          "info": "Prior Zone Status GID"
}
      },
      "fk_tables": [
        "GTM_TL_ADDITIONAL_INFO",
        "GTM_TRANSACTION_LINE",
        "GTM_TRANSACTION_LINE_NOTE",
        "GTM_TRANSACTION_LINE_STATUS",
        "GTM_TRANSLINE_REFNUM",
        "GTM_TRANS_LINE_CODE",
        "GTM_TRANS_LINE_DATE",
        "GTM_TRANS_LINE_INV_PARTY",
        "GTM_TRANS_LINE_LICENSE",
        "GTM_TRANS_LINE_PROD_DOC",
        "GTM_TRANS_LINE_QF",
        "GTM_TRANS_LINE_QUANTITY",
        "GTM_TRANS_LINE_REFERENCE",
        "GTM_TRANS_LINE_REMARK",
        "GTM_TRANS_LINE_REPORT_QUANTITY",
        "GTM_TRANS_LINE_REQDOC_LINK",
        "GTM_TRANS_LINE_TEXT_LINK",
        "GTM_TRANS_LINE_VALUE",
        "GTM_TRANS_REQD_TEXT",
        "GTM_TR_BASE_AMOUNT",
        "GTM_TR_CONTROL_SCREEN",
        "GTM_TR_LINE_PERCENTAGE_VALUE",
        "GTM_TR_OTHER_CONTROL",
        "GTM_TR_PARTY_SCREEN",
        "GTM_TR_PROD_CLASSIFICATION",
        "GTM_TR_REPORTING",
        "GTM_TR_REQD_CLASSIFICATION",
        "GTM_TR_SANCTION"
]
    }
  }
};