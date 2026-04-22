// ITEM_QF.js

window.ITEM_QF = {
  "tables": {
    "ITEM_QF": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ITEM_QF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the item qualification. "
        },
        "ITEM_QF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the item qualification. "
        },
        "ITEM_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ITEM_ORIGIN",
          "info": "The GID for the item origin. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Describes the item qualification. "
        },
        "GTM_TRADE_AGREEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_TRADE_AGREEMENT",
          "info": "The GID for the trade agreement associated with the item qualification. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "The GID for the product classification type of the importing country. "
        },
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The product classification code associated with the product classification type of the item qualification. "
        },
        "IS_QUALIFIED": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N",
            "NS"
          ],
          "info": "Indicates if an item qualified for a trade agreement. Can have \"Y\",\"N\" and \"NS\" and default value is \"NS\" "
        },
        "QF_PREFERENCE_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QF_PREFERENCE_CRITERIA",
          "info": "The GID for the preference criteria associated with an item qualification. "
        },
        "QF_RVC_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QF_RVC_METHOD",
          "info": "The GID for the regional value content method associated with an item qualification. "
        },
        "PRODUCER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Indicates if the supplier/partner is the producer of the goods. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date for the item qualification. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date for the item qualification. "
        },
        "STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "DISCONTINUED",
            "NOT STARTED",
            "ELIGIBLE",
            "QUALIFIED",
            "NOT QUALIFIED",
            "REQUIRES REVIEW"
          ],
          "info": "Indicates the status of an item qualification. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "GTM_TARIFF_CODE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Specifies the tariff code for a particular item qualification. "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "RVC_PERCENTAGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The percentage of the regional value content method associated with an item qualification. "
        },
        "QUALIFICATION_REPORT": {
          "type": "CLOB",
          "nullable": true,
          "info": "The qualification_report object associated with an item qualification. "
        },
        "MIN_OPS_MEET": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N",
            "NA"
          ],
          "info": "This flag indicates if minimum operations are met under Rules of Origin. "
        },
        "ROO_ATTRIBUTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Indicates the attribute description under the product specific rule(suffix/ex) after the Rules of Origin Qualification "
        },
        "WHOLLY_ORIGINATED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the Item is wholly originating under the trade agreement "
        },
        "COUNTRY_OF_IMPORT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "This describes the country of import for the item "
        },
        "GTM_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REASON_CODE",
          "info": "Reason Code Id when status is evaluated to REQUIRES REVIEW "
        },
        "GTM_STRUCTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_STRUCTURE",
          "info": "Identifies the Bill of Material of item for which qualification is captured."
        }
      },
      "fk_tables": [
        "ITEM_QF_CONDITION",
        "ITEM_QF_REFNUM",
        "ITEM_QF_REMARK",
        "ITEM_QF_REQDOC",
        "ITEM_QF_VALUE"
      ]
    }
  }
};
