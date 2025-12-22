---
id: troubleshooting
title: Troubleshooting Guide
sidebar_label: Troubleshooting
sidebar_position: 8
---

# Troubleshooting Guide

Common issues and solutions for Rewardify.

## Installation Issues

### Package Won't Install

**Error:** "Unable to install package"

**Solutions:**
1. Check Joomla version (requires 6.0+)
2. Check PHP version (requires 8.1+)
3. Verify zip file is not corrupted
4. Check file permissions (uploads directory)
5. Increase PHP memory limit (min 128MB)
6. Check for database connection issues

### Missing Tables After Install

**Error:** Database tables not created

**Solutions:**
1. Check database user permissions
2. Manually run SQL files from `admin/sql/install.mysql.utf8.sql`
3. Check Joomla error logs
4. Verify database collation (utf8mb4)

---

## Points Not Being Awarded

### General Points Issues

**Checklist:**
- [ ] Plugin is enabled (System → Plugins)
- [ ] Point rule is published
- [ ] Point value is not zero
- [ ] User has correct access level
- [ ] Rate limit not preventing award
- [ ] Action actually triggers the event
- [ ] No PHP errors in log

### Specific Scenarios

#### Registration Points Not Working

1. Check User - Rewardify plugin is enabled
2. Check `com_users.register` rule is published
3. Verify point value is not 0
4. Check access level includes registered users
5. Test with new account

#### Login Points Not Working

1. Check `com_users.login` rule is published
2. Verify rate limit allows daily awards (1 day)
3. Check if user already earned today
4. Clear Joomla cache
5. Check point history for existing entry

#### Article Points Not Working

1. Check Content - Rewardify plugin is enabled
2. Verify article created from frontend (not backend)
3. Check `com_content.article.create` rule
4. Confirm article is actually new (not edit)
5. Check article is published

#### Streak Bonus Not Working

**Requirements for 7-day streak:**
- User must login exactly 7 consecutive days
- No gaps in login history
- Check rule `com_users.login.streak_7`
- Verify points not already awarded for this streak

**Debug steps:**
1. Go to Components → Rewardify → Points
2. Filter by user
3. Check for `com_users.login` entries
4. Verify 7 consecutive dates
5. Look for existing streak award

---

## Leaderboard Issues

### Module Not Appearing

**Checklist:**
- [ ] Module is published
- [ ] Module assigned to menu items
- [ ] Module position exists in template
- [ ] Access level allows viewing
- [ ] Template displays that position

**Debug steps:**
1. Extensions → Modules → Find module
2. Check Status (must be Published)
3. Check Menu Assignment tab
4. Verify Position exists (compare with template)
5. Try different position temporarily

### No Users Showing in Leaderboard

**Possible causes:**
- No users have earned points yet
- Time period filter too restrictive
- Database query issue
- Cache showing old data

**Solutions:**
1. Check if ANY users have points (Components → Rewardify → User Points)
2. Change time period to "All Time"
3. Clear Joomla cache
4. Clear module cache
5. Check for PHP errors

### Avatars Not Displaying

**Causes:**
- Avatar component not configured
- Users don't have avatars set
- Image permissions issue
- Gravatar not working

**Solutions:**
1. Components → Rewardify → Options
2. Check Avatar Component setting
3. For Gravatar: verify emails are valid
4. Check image directory permissions (755)
5. Test with users who have avatars

### Rankings Not Updating

**Causes:**
- Cache is stale
- Points not being awarded
- Cron job not running

**Solutions:**
1. Clear Joomla cache (System → Clear Cache)
2. Clear specific module cache
3. Disable module caching temporarily
4. Award test points and refresh
5. Check database for new entries

---

## Performance Issues

### Slow Page Load

**Symptoms:** Pages load slowly with Rewardify enabled

**Solutions:**

1. **Enable Caching:**
   - Components → Rewardify → Options
   - Enable Joomla caching
   - Set module cache to 30 minutes

2. **Optimize Database:**
   ```sql
   OPTIMIZE TABLE #__rewardify_points;
   OPTIMIZE TABLE #__rewardify_users;
   OPTIMIZE TABLE #__rewardify_points_rules;
   ```

3. **Limit Leaderboard Users:**
   - Show fewer users (5-10 instead of 20+)
   - Increase module cache time

4. **Check Database Indexes:**
   - Verify indexes on large tables
   - Run database maintenance

5. **Reduce Plugin Load:**
   - Disable unused plugins
   - Use rate limiting to reduce database writes

### High Database Usage

**Symptoms:** Database queries increasing

**Solutions:**
1. Enable rate limiting on frequently triggered rules
2. Archive old point entries
3. Use database query caching
4. Optimize database tables regularly
5. Consider moving to dedicated database server

---

## Display Issues

### Points Not Showing on Profile

**Causes:**
- Profile component not configured
- Template override issue
- Access permissions

**Solutions:**
1. Components → Rewardify → Options
2. Set Profile Component correctly
3. Check if profile template supports points
4. Verify user has permission to view
5. Check for template override conflicts

### Incorrect Point Totals

**Symptoms:** User points don't match history

**Possible causes:**
- Expired points
- Unpublished points
- Pending approval points
- Calculation error

**Solutions:**
1. Components → Rewardify → Points
2. Filter by specific user
3. Check Status column (only Published count)
4. Check Publish Up/Down dates
5. Manually recalculate if needed

### Styling Problems

**Issues:**
- Module looks broken
- CSS conflicts
- Responsive issues

**Solutions:**
1. Check browser console for CSS errors
2. Clear template cache
3. Check for template CSS conflicts
4. Use module class suffix for isolation
5. Create template override

---

## Error Messages

### "There is no 'com_rewardify.styles' asset"

**Cause:** Asset loading issue in frontend

**Solution:**
1. This is typically a development notice
2. Can be safely ignored if functionality works
3. Or clear Joomla cache
4. Reinstall component if persistent

### "Call to undefined method getUserPoints()"

**Cause:** Plugin trying to access component method incorrectly

**Solutions:**
1. Update plugins to latest version
2. Check if using Joomla 6 compatible version
3. Disable problematic plugin temporarily
4. Check plugin code for instanceof checks

### "Duplicate entry for key 'rule_name'"

**Cause:** Trying to create point rule with existing rule name

**Solution:**
1. Use unique rule name
2. Check existing rules for duplicates
3. Edit existing rule instead of creating new

### Database Errors

**Error:** "Table '#__rewardify_points' doesn't exist"

**Solutions:**
1. Reinstall component
2. Manually run install.mysql.utf8.sql
3. Check database prefix is correct
4. Verify database user permissions

---

## Plugin-Specific Issues

### User Plugin

**Problem:** Streak bonus awarded multiple times

**Solution:**
- Check for duplicate prevention in code
- Verify reference ID is unique per streak
- Review point history for duplicates
- Update to latest plugin version

### Content Plugin

**Problem:** Points awarded for backend articles

**Solution:**
- Plugin is designed for frontend only
- Use point rules to restrict
- Or modify plugin to exclude backend

### Community Builder Plugin

**Problem:** Connection points not working

**Solution:**
- Verify CB events are firing
- Check CB version compatibility
- Update Rewardify CB plugin
- Test CB functionality independently

### HikaShop Plugins

**Problem:** Purchase points not deducting

**Solution:**
- Check payment plugin order status trigger
- Verify sufficient points exist
- Check point conversion rate setting
- Review HikaShop order status workflow

---

## Developer Issues

### API Not Working

**Problem:** Points not awarded via API

**Solutions:**
1. Check component is properly booted
2. Verify instanceof checks
3. Use proper rule names
4. Check error logs for exceptions
5. Review API documentation

### Custom Plugin Not Triggering

**Checklist:**
- [ ] Plugin is enabled
- [ ] Event name is correct
- [ ] SubscriberInterface implemented
- [ ] getSubscribedEvents() returns array
- [ ] Method exists in plugin class
- [ ] No PHP errors

**Debug:**
```php
// Add to plugin method
$this->getApplication()->getLogger()->debug('My plugin triggered');
```

---

## Data Issues

### Lost Point History

**Causes:**
- Database corruption
- Accidental deletion
- Incomplete backup restore

**Solutions:**
1. Restore from backup if available
2. Check database trash/archive
3. Review point audit logs
4. Contact support for data recovery options

### Duplicate Points

**Problem:** Users have duplicate point entries

**Solutions:**
1. Check for rate limit settings
2. Enable duplicate prevention on rules
3. Use database query to find duplicates:
   ```sql
   SELECT awarded_to, rule_id, ref_id, COUNT(*) as count
   FROM #__rewardify_points
   WHERE published = 1
   GROUP BY awarded_to, rule_id, ref_id
   HAVING count > 1;
   ```
4. Manually remove duplicates

### Point Synchronization

**Problem:** Points out of sync between components

**Solutions:**
1. Recalculate point totals
2. Check for integration plugin issues
3. Verify all plugins are latest version
4. Run synchronization script if available

---

## Getting Help

If you can't resolve your issue:

### Before Contacting Support

Gather this information:
1. **Joomla version**
2. **PHP version**
3. **Rewardify version**
4. **Exact error message**
5. **Steps to reproduce**
6. **Enabled plugins list**
7. **Point rule configuration**
8. **Browser console errors**
9. **PHP error log**

### Support Channels

- 📖 **Documentation:** [Read full docs](overview.md)
- 💬 **Forum:** https://shondalai.com/support
- 📧 **Email:** support@shondalai.com
- 🐛 **Bug Reports:** Include detailed steps to reproduce

### Providing Debug Information

Enable debugging:
1. System → Global Configuration
2. System tab → Debug System: Yes
3. Reproduce the issue
4. Check error log: `/administrator/logs/`
5. Provide relevant log entries to support

### Temporary Workarounds

While waiting for support:
- Disable specific problematic plugin
- Use manual point awards
- Adjust point rule settings
- Clear cache frequently

---

## Preventive Maintenance

### Regular Tasks

**Weekly:**
- Check for PHP errors in logs
- Review point activity for anomalies
- Test critical functionality

**Monthly:**
- Backup database
- Clean up expired points
- Review and optimize point rules
- Check for extension updates

**Quarterly:**
- Database optimization
- Review user feedback
- Adjust point economy
- Update documentation

### Best Practices

1. **Always backup** before making changes
2. **Test on staging** site first
3. **Document customizations**
4. **Keep extensions updated**
5. **Monitor performance regularly**

---

**Related Documentation:**
- [Getting Started](getting-started.md)
- [Point Rules](point-rules.md)
- [Plugin Configuration](plugins.md)
- [Developer API](rewardify-points-system-api.md)

